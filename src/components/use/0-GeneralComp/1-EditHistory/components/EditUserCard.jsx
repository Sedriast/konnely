import  st  from  './EditUserCard.module.css' ;

export function EditUserCard({user}) {
    return (
        <div className={st.container}>
            <div className={st.img}>
                <img src={user?.img} alt="" />      
            </div>
            <div>
                <table>
                    <tbody>
                        <th>
                            <tr>
                                <th>
                                    Nombre
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Correo institucional
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Estado
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Contacto
                                </th>
                            </tr>
                        </th>
                        <td>
                            <tr>
                                <td>{user?.name}dasfasdfasf</td>
                            </tr>
                            <tr>
                                <td>{user?.email}</td>
                            </tr>
                            <tr>
                                <td>{user?.state}</td>
                            </tr>
                            <tr>
                                <td>{user?.contact}</td>
                            </tr>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    );
}