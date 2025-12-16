export interface PaginationProps{
    currentPage: number,
    totalPages: number,
    onPageChange: (page : number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
        const handlePrev = () => {
            if(currentPage > 1)
            onPageChange(currentPage - 1)
        }
        
        const handleNext = () => {
            if(currentPage < totalPages)
            onPageChange(currentPage + 1)
        }

        return (<>
             <div className="join fixed bottom-20 left-0 w-full flex justify-center bt">
            <button className="join-item btn" onClick={handlePrev} disabled={currentPage <= 1}>«</button>
            <button className="join-item btn">{currentPage}</button>
            <button className="join-item btn" onClick={handleNext} disabled={currentPage === totalPages}>»</button>
            </div>
        </>)
}