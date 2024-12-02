import FooterCards from "./FooterCards";
import Policies from "./Policies";

const Footer = () => {
    const shopify: string[] = [
        "About",
        "Careers",
        "Investors",
        "Press and Media",
        "Partners",
        "Affiliates",
        "Legal",
        "Service Status",
    ];
    const support: string[] = [
        "Merchant Support",
        "Help Center",
        "Hire a Partner",
        "Shopify Academy",
        "Shopify Community",
    ];
    const developers: string[] = [
        "Shopify.dev",
        "API Documentation",
        "Dev Degree",
    ];
    const products: string[] = [
        "Shop",
        "Shop Pay",
        "Shopify Plus",
        "Shopify Fulfillment Network",
        "Linkpop",
        "Shopify for Enterprise",
    ];
    const impact: string[] = [
        "Sustainability",
        "Social Impact",
        "Build Black",
        "Build Native",
        "Research",
    ];
    const solution: string[] = [
        "Online Store Builder",
        "Website Builder",
        "Ecommerce Website",
    ];
    return (
        <div className="w-full bg-black pt-20">
            <div className="w-[75%] m-auto">
                <div className="flex justify-between">
                <div className="text-white w-1/4">Logo</div>
                <div className="w-3/4 flex gap-28 flex-wrap">
                    <FooterCards title="Shopify" items={shopify} />
                    <FooterCards title="Support" items={support} />
                    <FooterCards title="Developers" items={developers} />
                    <FooterCards title="Products" items={products} />
                    <FooterCards title="Global Impact" items={impact} />
                    <FooterCards title="Solutions" items={solution} />
                </div>
                </div>
                <Policies />
            </div>
        </div>
    );
};

export default Footer;
