const ConnectionIndicator = ({ connected }: { connected: boolean }) => {

    return (
        <div className={`${connected ? 'bg-green-500 border-green-300' : 'bg-red-300 border-red-400/50'} border-l-2 border-b-2 rounded-bl-xl fixed top-0 right-0 h-10 px-3 py-2 flex items-center select-none hover:scale-105 transition`}>
            <h1 className={`text-xl font-light ${connected ? 'text-white' : ''}`}>{connected ? 'Connected' : 'Disconnected'}</h1>
            <span className="absolute top-1 right-1 flex size-2">
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${connected ? 'bg-green-200' : 'bg-gray-400'} opacity-100`}></span>
                <span className={`relative inline-flex size-2 rounded-full ${connected ? 'bg-green-200' : 'bg-gray-500/67'}`}></span>
            </span>
        </div>
    )
}

export default ConnectionIndicator;