type IconsWrapperProps = {
    children: React.ReactNode;
};

const IconsWrapper = ({children}: IconsWrapperProps) => {

    return (
        <div className={`w-full h-fit mx-auto grid gap-3 grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10`}>
            {children}
        </div>
    );
};

export default IconsWrapper;