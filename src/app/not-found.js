import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div>
                <h2>403 Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">Return Home</Link>
            </div>
        </div>
    )
}