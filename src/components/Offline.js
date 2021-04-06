function Offline() {
    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <img src="/images/content/warning.svg" alt="" />
                </div>
                <div className="ml-3">
                    <p className="text-sm text-yello-700">
                        You are offline. Don't you worry, you still can do things.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Offline;