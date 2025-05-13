interface BenefitBoxProps {
    icon: string;
    title: string;
    description: string;
}

const BenefitBox = (props: BenefitBoxProps) => {
    const { icon, title, description } = props;

    return (
        <div className="flex flex-col items-center py-6 px-4  flex-1">
            <i className={`${icon} text-emerald-700 text-3xl`}></i>
            <div className="font-bold text-slate-700 my-1 text-center">
                {title}
            </div>
            <div className="text-center text-sm">
                {description}
            </div>
        </div>
    )
}

export default BenefitBox;