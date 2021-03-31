import React, { useState } from 'react';
import './App.css';
import Webcam from "react-webcam";
import Slider from './Slider'
import SidebarItem from './SidebarItem'

const DEFAULT_OPTIONS = [
        {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
        },
        {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
        },
        {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
        },
        {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
        }
]

function PhotoBooth() {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const selectedOption = options[selectedOptionIndex]
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        }, [webcamRef, setImgSrc]);
    
    function handleSliderChange({ target }) {
        setOptions(prevOptions => {
            return prevOptions.map((option, index) => {
            if (index !== selectedOptionIndex) return option
            return { ...option, value: target.value }
            })
        })
        }
    
    function getImageStyle() {
        const filters = options.map(option => {
        return `${option.property}(${option.value}${option.unit})`
        })
    
        return { filter: filters.join(' ') }
    }
    
        console.log(getImageStyle())
    

	return (
		<div className="webCanvas" id ="webCanvas">
			<div className="app__container">
                <Webcam
                    audio={false}
                    ref={webcamRef}
					muted
					autoPlay
                    screenshotFormat="image/jpeg"
					className="app__videoFeed main-image"
                    style={getImageStyle()}
                />
                {imgSrc && (
                    <img
                    src={imgSrc}
                    width ={150}
                    height ={150}
                    className = "img-stored"
                    />
                )}
			</div>
			<div className="app__input">
            <button onClick={capture}>Capture photo</button>
			</div>
            <div className="sidebar">
        {options.map((option, index) => {
            return (
                <SidebarItem
                key={index}
                name={option.name}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
                />
            )
            })}
        </div>
        <Slider
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSliderChange}
        />
		</div>
	);
}



export default PhotoBooth;