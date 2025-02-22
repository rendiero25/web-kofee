function Menu() {
    return (
        <section id="menu" className="container pb-12 px-8 sm:px-10 xl:px-20 2xl:flex 2xl:justify-center 2xl:items-center">
            <div className="flex flex-col justify-center items-start gap-8">
                <div className="flex-col justify-start items-center gap-4">
                    <h1 className="font-primary font-bold text-secondary text-6xl">OUR MENU</h1>
                    <p className="font-secondary text-primary text-lg font-normal xl:max-w-sm">Blandit enim pretium purus morbi non tincidunt auctor eu molestie. Vitae eu nullam tincidunt accumsan.</p>
                </div>
                <div className="flex flex-col xl:flex-row items-start gap-8 xl:gap-12">
                    <div className="flex flex-col justify-center items-start gap-8">
                        <div className="flex flex-col justify-center items-start gap-4">
                            <h3 className="font-secondary text-secondary font-black text-3xl">COFFEE SELECTION</h3>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Espresso</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A strong and concentrated shot of coffee.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$2.99</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Americano</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A shot of espresso diluted with hot water..</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.49</p>
                            </div>
                            
                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Cappuccino</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Equal parts of espresso, steamed milk, and foam, topped with cocoa.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.99</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Latte</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Creamy espresso with steamed milk and a thin layer of foam.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$4.49</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Mocha</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A delightful blend of espresso, chocolate, steamed milk, and great amazing whipped cream.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$4.99</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Macadamia Nut Latte</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A nutty and indulgent latte with a hint of macadamia flavor.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.99</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-4 w-full">
                            <h3 className="font-secondary text-secondary font-black text-3xl">SPECIALITY DRINKS</h3>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Vanilla Latte</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A rich latte with a touch of sweet vanilla flavor.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.49</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Cold Brew</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Smooth and strong coffee brewed slowly in cold water for a bold taste.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.49</p>
                            </div>
                            
                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Caramel Macchiato</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Espresso with caramel, steamed milk, and foam.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.99</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Hazelnut Frappuccino</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Creamy espresso with steamed milk and a thin layer of foam.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$5.99</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Matcha Green Tea Latte</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A creamy and earthy latte made with matcha green tea.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$4.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-8">
                        <div className="flex flex-col justify-center items-start gap-4">
                            <h3 className="font-secondary text-secondary font-black text-3xl">PASTRIES</h3>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Muffin</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A freshly baked, moist, and flavorful breakfast treat.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.49</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Cinnamon Roll</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A sweet and gooey pastry swirled with cinnamon and icing.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.99</p>
                            </div>
                            
                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Danish Pastry</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A light and airy pastry filled with various sweet fillings.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$4.49</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Scone</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A slightly sweet or savory biscuit-like pastry, perfect for a quick bite.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$4.49</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Mocha</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A delightful blend of espresso, chocolate, steamed milk, and great amazing whipped cream.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$4.99</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center items-start gap-4 w-full">
                            <h3 className="font-secondary text-secondary font-black text-3xl">SNACKS</h3>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Bagel with Cream Cheese</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A classic toasted bagel served with a creamy spread.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$4.49</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Granola Bar</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A wholesome and energy-packed snack for on-the-go.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$2.49</p>
                            </div>
                            
                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Fruit Cup</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">A refreshing mix of seasonal fruits, perfect for a light snack.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$3.99</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start gap-4 w-full">
                            <h3 className="font-secondary text-secondary font-black text-3xl">EXTRAS</h3>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Extra Shot of Espresso</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Add an extra kick of bold espresso to your drink.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$0.49</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Flavored Syrup</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Enhance your beverage with a choice of delicious syrups.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$0.49</p>
                            </div>
                            
                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Non-Dairy Milk (Almond, Soy, Oat)</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Indulge in a dollop of creamy and sweet whipped topping.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$0.49</p>
                            </div>

                            <div className="flex flex-row justify-between items-center gap-4 w-full">
                                <div className="flex-col justify-start items-center gap-4 w-full">
                                    <div className="flex flex-row">
                                        <h4 className="font-primary text-xl font-bold text-black">Chocolate Drizzle</h4>
                                        <hr className="border-2 border-black w-full border-dotted ml-2 mt-[1rem]"/>
                                    </div>
                                    <p className="font-primary font-normal text-slate-900">Add a delightful touch of chocolate to your drink.</p>
                                </div>
                                <p className="self-start font-primary text-lg font-bold text-black">$0.49</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;