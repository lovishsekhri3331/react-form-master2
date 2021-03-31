import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
             <div class="container-fluid bg-gray-800">
    <div class="container bg-gray-800 text-white p-8">
        <div class="sm:flex mb-4">
            <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                <div class="text-red-light mb-3"><Link to="/form"><img src="logo.png" alt="Vache Milk Photobooth Logo"></img></Link></div>
                <p class="text-grey-darker text-sm leading-normal w-3/4">We strive to help enhance quality of life for
                    everyone by promoting a healthy lifestyle and providing quality dairy products for many generations
                    to come. </p>
                <div class="mt-4 flex">
                    <i class="mr-5 fab fa-instagram hover:text-red-600"></i>
                    <i class="mr-5 fab fa-facebook hover:text-red-600"></i>
                    <i class="mr-5 fab fa-twitter hover:text-red-600"></i>
                    <i class="mr-5 fab fa-pinterest hover:text-red-600"></i>
                </div>
            </div>
            <div class="sm:w-1/4 h-auto">
                <div class="text-lg mb-2 font-bold quickLinks">Quick Links</div>
                <ul class="list-reset leading-normal">
                   
                    <li class="pr-5 hover:text-red-600">
                        <Link to="/form">Contest</Link>
                    </li>
                    <li class="pr-5 hover:text-red-600">
                        <Link to="/about">Product</Link>
                    </li>
                    <li class="pr-5 hover:text-red-600">
                        <Link to="/topics">Contact</Link>
                    </li>
                    <li class="pr-5 hover:text-red-600">
                        <Link to="/legal">Legal</Link>
                    </li>
                </ul>
            </div>
            <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
                <div class="text-lg mb-2 font-bold">Contact Us</div>
                <ul class="list-reset leading-normal">
                    <li class="mb-3"><i class="fas fa-envelope pr-2"></i><a class="hover:text-red-600"
                            href="mailto:info@vache.ca">info@vache.ca</a></li>
                    <li class="mb-3"><i class="fas fa-phone-alt pr-2"></i><a class="hover:text-red-600" href="tel:14163831463">+1 (416)-383-1463</a></li>
                    <li class="mb-3"><i class="fas fa-map-marker-alt pr-3"></i><a class="hover:text-red-600"
                            href="mailto:info@vache.ca">603 Richmond Hwy,<br></br>Toronto, ON, Canada</a></li>
                </ul>



            </div>
            <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
                <div class="text-lg mb-3 font-bold">Sign up for updates</div>
                <input type="text" class="bg-gray-900 p-2 text-white rounded" placeholder="Email Address"></input>
                <button class="bg-red-800 p-2 mt-3 rounded">Subscribe</button>

             

            </div>


        </div>
    </div>
    </div>
                    
        </div>
    )
}

export default Footer;