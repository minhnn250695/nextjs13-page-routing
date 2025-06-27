interface PaginationProps {
  currentPage: number;
  totalPages: number;
  prevUrl?: string;
  nextUrl?: string;
  baseUrl?: string;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  prevUrl, 
  nextUrl, 
  baseUrl = "#" 
}: PaginationProps) {
  const generatePageUrl = (page: number) => {
    return baseUrl === "#" ? "#" : `${baseUrl}?page=${page}`;
  };

  return (
    <div className="row">
      <nav className="pagination">
        {/* Previous Button */}
        {currentPage > 1 ? (
          <a href={prevUrl || generatePageUrl(currentPage - 1)} className="page-numbers prev">
            Prev
          </a>
        ) : (
          <span className="page-numbers prev inactive">Prev</span>
        )}

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          page === currentPage ? (
            <span key={page} className="page-numbers current">
              {page}
            </span>
          ) : (
            <a key={page} href={generatePageUrl(page)} className="page-numbers">
              {page}
            </a>
          )
        ))}

        {/* Next Button */}
        {currentPage < totalPages ? (
          <a href={nextUrl || generatePageUrl(currentPage + 1)} className="page-numbers next">
            Next
          </a>
        ) : (
          <span className="page-numbers next inactive">Next</span>
        )}
      </nav>
    </div>
  );
}
