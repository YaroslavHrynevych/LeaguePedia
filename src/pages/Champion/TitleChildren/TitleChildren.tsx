type TitleChildrenProps = {
    title: string;
    children: React.ReactNode;
};

const TitleChildren = ({title,children}: TitleChildrenProps) => {
    return (
        <div className='grid grid-cols-[3fr_5fr] gap-2 items-baseline'>
            <h4>{title}</h4>
            <div className='text-main-accent capitalize'>
                {children}
            </div>
        </div>
    );
};

export default TitleChildren;