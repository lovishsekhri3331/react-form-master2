import {withRouter} from 'react-router-dom';

function NameForm(props){
    function goToThanks(e) {
        e.preventDefault();
        console.log('Thank you user!');
        props.history.push('/thanks')
    }
    return (
        <form onSubmit={goToThanks}>
            <section>
                <label>Name:
                    <input type="text" onChange={props.handleChange} /> 
                </label>
            </section>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default withRouter(NameForm);

