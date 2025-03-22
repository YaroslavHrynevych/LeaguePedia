type TwoColumnsProps = {
    children?: React.ReactNode;
};

const TwoColumns = ({children}: TwoColumnsProps) => {
    return (
        <div className='grid md:grid-cols-[3fr_1fr] gap-8'>
            {children}
        </div>
    );
};

export default TwoColumns;