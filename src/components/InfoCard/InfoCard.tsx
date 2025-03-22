type InfoCardProps = {
    children?: React.ReactNode,
    className?: string,
};

const InfoCard = ({children, className}: InfoCardProps) => {
    return (
        <div className={`md:order-2 shadow-xl h-fit ${className ?? ''}`}>
            {children}
        </div>
    );
};

export default InfoCard;