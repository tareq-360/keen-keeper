import { Plus } from "lucide-react";

const Hero = () => {
    return (
        <div className="bg-[#F8FAFC] text-black  h-full px-10 py-10">
            <div className=" text-center space-y-5 py-5">
                <h2 className="text-3xl font-bold">
                    Friends to keep close in your life
                </h2>
                <p>
                    Your personal shelf of meaningful connections. <br></br>Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className="btn bg-[#244D3F]">+Add a Friend</button>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 text-center justify-items-center pt-5">
                <div className=" bg-[#FFFFFF] w-40 h-25 flex flex-col items-center justify-center p-3" >
                    <h3>10</h3>
                    <p className=" text-sm">Total Friend</p>
                </div >
                <div className=" bg-[#FFFFFF] w-40 h-25 flex flex-col items-center justify-center p-3">
                    <h3>03</h3>
                    <p className=" text-sm">On Track</p>
                </div>
                <div className=" bg-[#FFFFFF] w-40 h-25 flex flex-col items-center justify-center p-3">
                    <h3>06</h3>
                    <p className=" text-sm">Need Attention</p>
                </div>
                <div className=" bg-[#FFFFFF] w-40 h-25 flex flex-col items-center justify-center p-3">
                    <h3>12</h3>
                    <p className=" text-sm">Interactions This Month</p>
                </div>
            </div>
            <div className="pt-10">
                <h3>Friends</h3>
                <div className="bg-[#F8FAFC] grid md:grid-cols-3 lg:grid-cols-4 ">
                    <div className="card   shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;