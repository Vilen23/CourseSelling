export function Card({comp}){
    return <div className='flex justify-center items-center mt-48 '>
        <div className='bg-slate-200 shadow-2xl rounded-lg inline-block p-24 '>
            {comp}
        </div>
    </div>
}