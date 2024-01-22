import CollectionCard from "./CollectionCard";

const Collection = () => {
    return (
        <div className="dark:bg-slate-800 dark:text-white">
            <div className="flex pt-20 h-screen   max-w-7xl mx-auto">
                <div className="w-1/4 border h-[500px] ">
                    <h1 className="border-y py-4 text-center font-bold text-xl">Find Yours</h1>
                    <h1 className="font-semibold px-2 mt-3">Price Range</h1>
                    <div className="flex justify-evenly mt-3">
                        <input type="number" name="" id="" className="text-black border p-3 w-[30%]" defaultValue={0} />
                        <input type="number" name="" id="" className="text-black border p-3 w-[30%]" defaultValue={2000} />
                    </div>
                    <div className="border w-[80%] mx-auto mt-6 p-3">
                        ok
                    </div>
                    <div className="border w-[80%] mx-auto mt-6 p-3">
                        ok
                    </div>
                </div>
                <div className="3/4  ml-4">
                    <CollectionCard></CollectionCard>
                </div>
            </div>
        </div>
    );
};

export default Collection;