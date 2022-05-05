import { useRouter } from "next/router";
import { ReactElement } from "react";
import { Nav } from "react-bootstrap";

const MainNav: React.FunctionComponent = (): ReactElement => {
  const router = useRouter();

  const onPathChange = (path: string | null): void => {
    path && router.push(path);
  };

  return (
    <Nav
      className="my-3"
      variant="pills"
      activeKey={router.pathname}
      onSelect={onPathChange}
    >
      <Nav.Item>
        <Nav.Link eventKey="/">Главная</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/about">О нас</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/404">Страница 404</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default MainNav;
