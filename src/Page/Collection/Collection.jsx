import CollectionCard from "./CollectionCard";

const Collection = () => {
    return (
        <div className="dark:bg-slate-800 dark:text-white">
            <div className="md:flex pt-20   max-w-7xl mx-auto  ">
                <div className="md:w-2/5 border h-[500px] mx-2">
                    <h1 className="border-y py-4 text-center font-bold text-xl">Find Yours</h1>
                    <h1 className="font-semibold px-2 mt-3">Price Range</h1>
                    <div className="flex justify-evenly mt-3">
                        <input type="number" name="" id="" className="text-black  border p-1 w-[35%]" defaultValue={0} />
                        <input type="number" name="" id="" className="text-black  border p-1 w-[35%]" defaultValue={2000} />
                    </div>
                    <div className="border w-[80%] mx-auto mt-6 p-3">
                        ok
                    </div>
                    <div className="border w-[80%] mx-auto mt-6 p-3">
                        ok
                    </div>
                </div>
                <div className="md:3/5 mx-2 grid md:grid-cols-4 gap-2">
                    <CollectionCard></CollectionCard>
                    <CollectionCard></CollectionCard>
                    <CollectionCard></CollectionCard>
                    <CollectionCard></CollectionCard>
                    <CollectionCard></CollectionCard>
                </div>
            </div>
        </div>
    );
};

export default Collection;