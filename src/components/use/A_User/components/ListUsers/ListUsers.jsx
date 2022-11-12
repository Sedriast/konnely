import st from "./ListUsers.module.css";
import { UserCards } from "./components/UserCards";
import { SearchAll } from "../../../../firebase/funtions/GetInformation";

export function ListUsers() {
  const data = SearchAll({ coleccion: "users" }).props.children;
  return (
    <>
      <div className={st.panelSearchBar}>
        <form onSubmit={(e) => {}}>
          <input name="buscar" placeholder="Buscar" onChange={(e) => {}} />
          <button className={st.btnSearch} type="submit">
            🔎
          </button>
        </form>
      </div>

      <div className={st.container}>
        <div className={st.panelList}>
          {data[0].uid !== null && (
            <>
              {data.map((users, index) => (
                <UserCards
                  key={index}
                  userName={users.user}
                  userEmail={users.email}
                  user={users}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
