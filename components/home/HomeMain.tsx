import {
  ReactElement,
  useEffect,
  useContext,
  MouseEvent,
  useState,
  useRef,
} from "react";
import { v4 } from "uuid";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchUserList } from "../../store/models/user/user";
import { Table, Button, Stack, Spinner } from "react-bootstrap";
import { UIModalContext } from "../ui/modal/UIModal.context";
import MainNav from "../layout/partials/main-nav/MainNav";
import PageTitle from "../layout/partials/page-title/PageTitle";
import styles from "./HomeMain.module.scss";
import { IContact } from "../../store/models/contact/contact.typing";

const HomeMain: React.FunctionComponent = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const { dispatch: UIModalDispatch } = useContext(UIModalContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const users = useAppSelector((store) => store.homePage.users);

  // Should be moved to the server-side
  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  const handleMoreBtnClick = () => {
    setCurrentPage((prevValue) => prevValue + 1);
  };

  const handleSaveBtnClickCreator =
    (userId: typeof v4) => async (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      if (!(formRef.current instanceof HTMLFormElement)) return;

      const formData = new FormData(formRef.current);
      const contacts = {
        first_name: formData.get(`user[${userId}][first_name]`),
        last_name: formData.get(`user[${userId}][last_name]`),
        user_name: formData.get(`user[${userId}][user_name]`),
      };

      console.log("contacts: ", contacts);

      /* Should be implemented */
    };

  const handleDeleteBtnClickCreator =
    (userId: typeof v4) => async (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      console.log("userId: ", userId);

      /* Should be implemented */
    };

  const handleContactsBtnClickCreator =
    (userId: typeof v4, userName: string) =>
    async (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      // Should be replaced with your implementation
      const userContacts = null;

      if (UIModalDispatch) {
        const email = (userContacts as IContact | null)?.email ?? "[email]";
        const phone = (userContacts as IContact | null)?.phone ?? "[phone]";
        const website =
          (userContacts as IContact | null)?.website ?? "[website]";

        UIModalDispatch({
          type: "template",
          payload: {
            title: `Контакты пользователя ${userName}`,
            body: (
              <dl className="row">
                <dt className="col-sm-3">Email</dt>
                <dd className="col-sm-9">{email}</dd>
                <dt className="col-sm-3">Телефон</dt>
                <dd className="col-sm-9">{phone}</dd>
                <dt className="col-sm-3">Веб-сайт</dt>
                <dd className="col-sm-9">{website}</dd>
              </dl>
            ),
          },
        });

        UIModalDispatch({ type: "open" });
      }
    };

  return (
    <>
      <PageTitle title="Список сотрудников" />

      <MainNav />

      <form ref={formRef}>
        <Table className={styles["home__user-list"]}>
          <thead>
            <tr>
              <th>№</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Имя пользователя</th>
              <th>Контакты</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {users
              ?.slice(0, Number(process.env.USERS_PER_PAGE) * currentPage)
              .map(({ id, first_name, last_name, user_name }, i) => {
                return (
                  <tr key={`User-${id}`}>
                    <td>{i + 1}</td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name={`user[${id}][first_name]`}
                        defaultValue={first_name}
                        placeholder="Имя"
                        aria-label="Имя"
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name={`user[${id}][last_name]`}
                        defaultValue={last_name}
                        placeholder="Фамилия"
                        aria-label="Фамилия"
                      />
                    </td>
                    <td>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name={`user[${id}][user_name]`}
                        defaultValue={user_name}
                        placeholder="Имя пользователя"
                        aria-label="Имя пользователя"
                      />
                    </td>
                    <td>
                      <a
                        href="#"
                        role="button"
                        onClick={handleContactsBtnClickCreator(id, user_name)}
                      >
                        Показать контакты
                      </a>
                    </td>
                    <td>
                      <Stack direction="horizontal" gap={4}>
                        <a
                          href="#"
                          className="btn btn-success"
                          role="button"
                          onClick={handleSaveBtnClickCreator(id)}
                        >
                          Сохранить
                        </a>
                        <a
                          href="#"
                          className="btn btn-danger"
                          role="button"
                          onClick={handleDeleteBtnClickCreator(id)}
                        >
                          Удалить
                        </a>
                      </Stack>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </form>
      {/* 
      
      Spinner template 

      <Stack
        style={{ justifyContent: "center" }}
        className="my-3"
        direction="horizontal"
      >
        <Spinner animation="grow" role="status">
          <span className="visually-hidden">
            Загрузка данных пользователей...
          </span>
        </Spinner>
      </Stack>
      
      */}
      {(users?.length ?? 0) >
        Number(process.env.USERS_PER_PAGE) * currentPage && (
        <Stack className="mt-3" direction="vertical">
          <Button variant="primary" onClick={handleMoreBtnClick}>
            Показать ещё
          </Button>
        </Stack>
      )}
    </>
  );
};

export default HomeMain;
