
export const h4Style = "text-[#33B244] font-bold text-xs text-center sm:text-left"
const ContactDetails = () => {
    
    const PStyle = "text-[#222] font-light text-xl text-center sm:text-left"
    return (
        <div className="my-9 lg:h-[20rem] flex items-center ">
            <ul className="flex flex-col items-center justify-center sm:items-start md:flex-row md:justify-between max-w-[90rem] m-auto p-5 w-full gap-16">
                <li className="flex flex-col md:gap-3">
                    <h4 className={h4Style}>Offices</h4>
                    <p className={PStyle}>81 Sherman Avenue  Merrick,
                        New York 11566</p>
                </li>
                <li className="flex flex-col gap-3">
                    <h4 className={h4Style} >Reach us at</h4>
                    <p className={PStyle}>hello@botanika.xom <br /> ph. +1. 278.333.2872</p>
                </li>
                <li className="flex flex-col gap-3">
                    <h4 className={h4Style}>Working hours</h4>
                    <p className={PStyle}>Mon–Friday : 08am–09pm <br /> Sat–Sun: 10am–05pm</p>
                </li>
            </ul>
        </div>
    )
}

export default ContactDetails