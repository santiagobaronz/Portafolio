interface AlertProps {
    message: string;
}

export const Alert = ({ message }: AlertProps) => {

    return (
        <div className='flex items-center justify-center w-fit h-full mt-5 mx-auto bg-gray-hover text-center rounded-lg py-5 text-gray'>
            <p className='animate-pulse px-10'>{message}</p>
        </div>
    );
};