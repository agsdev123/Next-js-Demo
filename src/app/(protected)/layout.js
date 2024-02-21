// app/products/[productId]/layout.tsx
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

import DashboardHeader from "./-components/Header";
import Link from "next/link";

export default function Dashboardlayout({
    children,
}) { // Added closing curly brace and colon
    return (
        <>
      <DashboardHeader/>
            {children}
            {/* <h2>Featured products</h2> */}
            {/* Carousel of featured products */}
        </>
    );
}