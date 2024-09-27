import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props;
    return (
        <div className="flex justify-between items-center border border-black p-4 rounded-lg w-80 mb-4">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.2024</span>
                    <span className='font-light'>{totalProducts} articulos</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className="size-6 text-black cursor-pointer"></ChevronRightIcon>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard