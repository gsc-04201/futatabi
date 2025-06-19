import Typography from "@mui/material/Typography";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNavigation({
  items,
}: BreadcrumbNavigationProps) {
  return (
    <div style={{ padding: "0 40px 20px 40px" }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{ color: "#666" }}
      >
        {items.map((item, index) => (
          <div key={index}>
            {item.href ? (
              <Link
                href={item.href}
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ) : (
              <Typography color="text.secondary">{item.label}</Typography>
            )}
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
}
