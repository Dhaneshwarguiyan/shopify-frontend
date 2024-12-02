import NavTiles from "./NavTiles";

const Policies = () => {
    const policies: string[] = [
        "Terms of Service",
        "Privacy Policy",
        "Sitemap",
        "Privacy Choices",
    ];
    return (
            <div className="w-full m-auto border-t py-3 mt-20 ">
                <div className="flex justify-center gap-8">
                    {policies.map((policy, i) => {
                        return <NavTiles text={policy} type="foot" key={i} />;
                    })}
                </div>
            </div>
    );
};

export default Policies;
