
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-10">
            <div className="container mx-auto grid grid-cols-4 gap-8">
               
                <div>
                    <h1 className="text-2xl font-bold mb-4">Fun Trek</h1>
                    <p>Experience the best summer with us! Join Camp Sunshine for unforgettable memories and adventures.</p>
                </div>

            
                <div>
                    <h3 className="text-xl font-bold mb-4">Activities</h3>
                    <ul>
                        <li className="mb-2 transform transition-transform hover:translate-x-2">Hiking</li>
                        <li className="mb-2 transform transition-transform hover:translate-x-2">Arts & Crafts</li>
                        <li className="mb-2 transform transition-transform hover:translate-x-2">Swimming</li>
                    </ul>
                </div>

            
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <ul>
                        <li className="mb-2">Phone: (123) 456-7890</li>
                        <li className="mb-2">Email: info@campsunshine.com</li>
                        <li className="mb-2">Address: 123 Camp St, Sunshine City</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Registration</h3>
                    <ul>
                        <li className="mb-2 transform transition-transform hover:translate-x-2">Pricing</li>
                        <li className="mb-2 transform transition-transform hover:translate-x-2">Sign Up</li>
                        <li className="mb-2 transform transition-transform hover:translate-x-2">Testimonials</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-300 pt-4 text-center">
                &copy; {new Date().getFullYear()} Camp Sunshine. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;