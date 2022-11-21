import st from './Layout.module.css';
import app from '../components/firebase/credentials';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { useAuth } from '../context/AuthContext';
import { ProtectedRoute } from './protectedRoute/ProtectedRoute';
import { themesData } from './use/0-GeneralComp/0-StaticData/customThemeData';

import { User } from './use/A_User/User';
// import { Invoice } from './use/Invoice/Invoice';
import { NewTrat } from './use/F-Forms/NewTrats/NewTrat';
import { DataView } from './use/C_DataView/DataView';
import { ViewIsList } from './use/B_VitaeIsList/VitaeIsList';
import { EditUserData } from './use/F-Forms/EditUserData/EditUserData';
import { LoginRegister } from './use/A_LoginRegister/LoginRegister';
import { EditRabbitData } from './use/F-Forms/EditRabbitData/EditRabbitData';
import { ReproView } from './use/C_ReproView/ReproView';
import { EditLife } from './use/F-Forms/EditLifedata/EditLife';
import { EditRepro } from './use/F-Forms/EditReproData/EditRepro';
import { EditTrats } from './use/F-Forms/EditTrats/EditTrats';
import { RemovalTratament, RemovalUser } from './firebase/funtions/AddInformation';
import { DashBoard } from './use/C_PrimaryView/DashBoard';
import { Record } from './use/C_Record/Record';
import { NewRepro } from './use/F-Forms/NewReproData/NewRepro';
import { getAuth, updateProfile } from 'firebase/auth';
import { Invoice } from './use/F-Forms/NewInvoice/Invoice';
import { useModal } from './use/0-GeneralComp/0-StaticData/Modals/useModal';
import { Modal } from './use/0-GeneralComp/0-StaticData/Modals/Modal';
import { RetrieveUser, RetrieveUserData } from './use/0-GeneralComp/0-StaticData/dataProv';

const db = getFirestore(app);
export const auth = getAuth(app);

export function Layout() {
    const { user } = useAuth();
    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [credencial, setCredencial] = useState('');

    useEffect(() => {
        if (user) {
            let u = { theme: 0 };
            async function getData() {
                const query_ = query(collection(db, 'users'), where('uid', '==', user.uid));
                const querySnapshot = await getDocs(query_);
                querySnapshot.forEach((doc) => {
                    u = doc.data();
                });
                document
                    .getElementById('lay')
                    .style.setProperty('background-image', `url(${themesData[u.theme].theme})`);
                document.getElementById('lay').style.setProperty('background-repeat', 'no-repeat');
                document.getElementById('lay').style.setProperty('background-size', 'cover');
            }
            async function getTrataments() {
                const trataments = await getDocs(collection(db, 'trataments'));
                trataments.forEach((doc) => {
                    if (
                        doc.data().state === 'Inactivo' &&
                        Date.now() - Date.parse(doc.data().removalDate) > 5259600000
                    ) {
                        RemovalTratament({
                            uid: doc.data().uid,
                            uidAudit: doc.data().uidAudit,
                        });
                    }
                });
            }
            async function profileUpdate() {
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    await updateProfile(auth.currentUser, {
                        photoURL: docSnap.data().photo,
                    }).catch((error) => {
                        console.log(error);
                    });
                } else {
                    console.log('No such document!');
                }
            }
            async function profileDelete() {
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.data().state === 'Inactivo') {
                    RetrieveUser(docSnap.data());
                    openModal();
                }
            }
            getData();
            getTrataments();
            profileUpdate();
            profileDelete();
        }
    }, [user, openModal]);

    return (
        <>
            <div className={st.container} id='lay'>
                <Modal isOpen={isOpenModal} closeModal={closeModal}>
                    {isOpenModal && (
                        <>
                            <input
                                type='password'
                                placeholder='Digite su contraseña'
                                onChange={(e) => {
                                    e.preventDefault();
                                    setCredencial(e.target.value);
                                }}
                            />
                            <button
                                onClick={async (e) => {
                                    e.preventDefault();
                                    closeModal();
                                    RemovalUser({
                                        data: RetrieveUserData.info,
                                        contraseña: credencial,
                                        user: user,
                                    });
                                }}>
                                Enviar
                            </button>
                        </>
                    )}
                </Modal>
                <Router>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={
                                <div className={st.initContainer}>
                                    <LoginRegister />
                                </div>
                            }
                        />
                        <Route
                            exact
                            path='/users'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <User />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/vitaeslist'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <ViewIsList />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/vitae'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <DataView />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/user'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditUserData />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/formEdit'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditRabbitData />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route exact path='/analitics' element={<ProtectedRoute></ProtectedRoute>} />
                        <Route exact path='/record' element={<ProtectedRoute></ProtectedRoute>} />
                        <Route
                            exact
                            path='/addTrat'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <NewTrat />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/litterList'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <ReproView />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/editLife'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditLife />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/formEditRepro'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditRepro />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/NewRepro'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <NewRepro />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/editTrats'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditTrats />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/dashboard'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <DashBoard />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/reco'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <Record />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/invoice'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <Invoice />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </div>
        </>
    );
}
