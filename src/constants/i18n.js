import { language_keys } from "./keys";

const es = {
    [language_keys.LOADING]: {
        loadingMSG: "Cargando...",
    },
    [language_keys.ACCOUNT]: {
        LOGIN: {
            L_user: 'Usuario',
            L_password: 'Contraseña',
            L_register: 'Registrarse',
            L_forgotPassword: 'Olvidé mi contraseña',
            BTN_user: 'Siguiente',
            BTN_password: 'Ingresar',
            FORGOT_confirm: 'Enviar',
            FORGOT_cancel: 'Cancelar',
            FORGOT_message: 'Le enviaremos un correo de recuperación al correo:',
            FORGOT_ok: 'El link a sido enviado, porfavor ingrese a su correo.',
        },
        REGISTER: {
            name: 'Nombre',
            lastName: 'Apellido',
            password: 'Contraseña',
            authPassword: 'Confirmar contraseña',
            cellphoneNumber: 'Número de celular',
            institutionalID: 'Id. institucional',
            institutionalUser: 'Usuario institucional',
            MGG_success: 'Verifique su cuenta en la bandeja de su correo electronico',
            BTN_back: 'Volver',
            BTN_send: 'Crear cuenta',
            tutorial: {
                first: "Como primer paso, se debe abrir el correo institucional.",
                second: " Una vez abierto, debemos buscar la esquina superior derecha del correo.",
                tirth: " Aquí buscaremos el icono de configuración (⚙️), como se muestra en la imagen",
                fourth: "Al dar clic en el icono de configuración, se desplegará el menu de preferencias.",
                fifth: "Y, en el debemos dar clic en el texto: ‘Ver toda la configuración de Outlook’. Generalmente este texto está ubicado al final del menú. ",
                sixth: "Al dar clic en el texto descrito, veremos un menú con opciones primarias y secundarias.",
                seventh: "Dentro del primer menú buscaremos la opción de ‘Correo’",
                eighth: "Y dentro de este menú, buscaremos la opción de ‘Correo electronico no deseado’",
                ninth: "Y aquí, buscaremos en la parte inferior el apartado que dice ‘Remitentes y dominios seguros’",
                tenth: "Aquí, debemos dar clic en ‘Agregar’, donde se copiará y pegará la siguiente dirección.",
            },
        },
    },
    [language_keys.RABBITLIST]: {

        BTN_Natural: "nacimiento",
        BTN_Transferred: "traslado",
        L_addRabbit: "El nuevo conejo es de:",
        BTN_addRabbit: "Agregar conejo",
        FILTERS: { male: "Macho", female: "Hembra", inactive: "Inactivo", search: "Buscar id del conejo" },
        CARDS: {
            transferenceDate: "Fecha de transferencia:",
            state_: "Estado:",
            gender_: ["Genero:", "Hembra", "Macho"],
            birthType_: "Concepción:",
            birthDate_: "Camada de nacimiento:",
            origin_: "Procedencia:",
            stages_: {
                inactive: "Inactivo",
                litter: "Camada Activa",
                fattening: "En engorde",
                reproductive: "Próximo a destete",
                Pre_reproductive: "Preparandose para reproducción",
            },
        }
    },
    [language_keys.LITTERLIST]: {
        search: "Buscar",
        litterRecord: {
            titles: {
                palpationDate: "FECHA DE PALPACIÓN",
                prepartumDate: "FECHA DE ATENCION AL PARTO",
                weaning: {
                    format_w: ["H", "M"],
                    date_w: "FECHA DESTETE",
                    weight_w: "PESO DESTETE",
                    animals_w: "N°. ANIMALES",
                },
                ride: {
                    males: "PLACA MACHO",
                    date_r: "FECHA MONTA",
                    format_r: ["MES", "DIA", "AÑO"],
                },
                partum: {
                    format_p: ["V", "M"],
                    date_p: "FECHA DE PARTO",
                    animals_p: "N°. ANIMALES",
                    weight_p: "PESO DE NACIMIENTO (gr)",
                    predictedDate: "FECHA POSIBLE PARTO",
                },
            },
        },
    },
    [language_keys.ADDRABBIT]: {
        alert: "¿Desea añadir este conejo?",
        defaultOrigin: "Unidad Agroambiental El Tibar - Ubaté",
        races_: ["Nueva Zelanda", "Chinchilla", "Leonardo de Borgoña", "Californiano", "Azul de Viena", "F1"],
        labels: {
            male: "Macho",
            races: "Raza",
            dadID: "Id del conejo padre",
            momID: "Id de la coneja madre",
            origin: "Procedencia",
            female: "Hembra",
            rabbitID_l: "Id del conejo",
            weaningDate: "Fecha de destete",
            rabbitGender: "Género",
            transferenceDate: "Fecha de traslado",
            weaningAverageWeight: "Peso promedio de destete",
            currentAverageWeight: "Peso promedio actual",
        },
        placeholders: {
            origin_p: "Lugar de procedencia",
            rabbitID_p: "Id del conejo",
            weaningAverageWeight_p: "Peso promedio de destete",
            currentAverageWeight_p: "Peso promedio actual",
        },
        buttons: { submit_b: "Añadir conejo", back_b: "Atrás", addRaces_b: "Añadir raza", deleteRaces_b: "Eliminar raza" },
        card: {
            titles: { ride: "Monta", palpation: "Palpación", prepartum: "Preparto", partum: "Parto", weaning: "Destete y venta" },
            labels: {
                natural: "Nartural",
                litterID: "ID. de la camada",
                rideDate: "Fecha de la monta",
                rideMale: "Macho",
                rideFemale: "Hembra",
                artificial: "Artificial",
                partumDate: "Fecha de parto",
                partumDead: "Muertos",
                partumAlive: "Vivos",
                weaningDate: "Fecha de destete",
                weaningMales: "Machos",
                palpationDate: "Hembras",
                prepartumDate: "Fecha de la preparación al parto",
                weaningFemales: "Hembras",
                partumHomogenized: "Homogenizados",
                weaningAverageWeight: "Peso promedio de la camada",
            },
        }
    },
    [language_keys.VITAE]: {
        buttons: {
            BTN_back: "Atras",
            BTN_print: "Imprimir",
        },
        labels: {
            rabbit: "Conejo",
        },
        titles: {
            race: "RAZA",
            stadistics: "ESTADISTICAS",
            isTransfered: "Trasferido",
            litter_: ["CAMADA", ["Monta", "Fecha:", "Macho:", "Tipo:"], "Palpación", "Preparto", ["Parto", "Vivos:", "Muertos:", "Homogenizados:"], ["Destete", "Peso camada:", "Hembras", "Machos"]],
            basicData: ["INFORMACIÓN BÁSICA", "Estado:", "Raza:", "Genero:", "Fecha de traslado", "Camada de nacimiento:", "Tipo de concepción:", "Procedencia:", "Id. Madre", "Id. Padre"],
            lifecycle: ["CICLO DE VIDA", "Destete", "Peso actual", ["Fecha:", "Peso:"], [
                "Ene",
                "Feb",
                "Mar",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Oct",
                "Nov",
                "Dic",
            ]],
            stages_: {
                male: "Macho",
                female: "Hembra",
                inactive: "Inactivo",
                litter: "Camada Activa",
                fattening: "En engorde",
                reproductive: "Próximo a destete",
                Pre_reproductive: "Preparandose para reproducción",
                natural: "Monta Natural",
                artificial: "Inseminación Artificial",
            },
        },
        litterData: {
            titles: { litters_t: "CAMADAS" },
            buttons: { record_b: "ver todo", add_b: "añadir" },
        }
    },
    [language_keys.PRINT]: {
        buttons: {
            BTN_back: "Atras",
        },
        codes: "16",
        header: {
            code: "Código:",
            vertion: "Versión:",
            validity: "Vigencia:",
            date: "Fecha:",
            format: {
                code_: "AAAr031",
                vertion_: "7",
                validityDate_: "Mar 3, 2020",
                titles: {
                    sizeProject: "MACROPROCESO DE APOYO",
                    process: "PROCESO DE GESTIÓN DE APOYO ACADÉMICO",
                    type: ["HOJA DE VIDA SEMOVIENTE HEMBRA", "HOJA DE VIDA SEMOVIENTE MACHO"],
                },
            },

        },
        bodyS: {
            table_one: {
                labels: ["CUNICOLA"],
                titles: ["ESPECIE", ["FECHA DE NACIMIENTO", "FECHA DE TRASLADO", "DIA", "MES", "AÑO"], "N°. IDENT. HEMBRA", "N°. IDENT. MACHO", "RAZA"],
            },
            table_two: {
                titles: ["Padre", "Madre"]
            },
            table_three: {
                titles: ["PESO", "ACTUAL", "NACIMIENTO", "TRASLADO", "DESTETE"]
            },
            table_four: {
                labels: ["monta natural", "inseminación artificial"],
                titles: ["EDAD DESTETE (meses)", "CRITERIO PARA LA SELECCIÓN", "trasladado desde ", "nacido por "],
            },
            litterRecord: {
                titles: {
                    palpationDate: "FECHA DE PALPACIÓN",
                    prepartumDate: "FECHA DE ATENCION AL PARTO",
                    weaning: {
                        format_w: ["H", "M"],
                        date_w: "FECHA DESTETE",
                        weight_w: "PESO DESTETE",
                        animals_w: "N°. ANIMALES",
                    },
                    ride: {
                        males: "PLACA MACHO",
                        date_r: "FECHA MONTA",
                        format_r: ["MES", "DIA", "AÑO"],
                    },
                    partum: {
                        format_p: ["V", "M"],
                        date_p: "FECHA DE PARTO",
                        animals_p: "N°. ANIMALES",
                        weight_p: "PESO DE NACIMIENTO (gr)",
                        predictedDate: "FECHA POSIBLE PARTO",
                    },
                },
            },
        },
        footer: {
            address_: ["Calle 6 N° 9-80 Ubate – Cundinamarca", "Teléfono:", "Ext.127 Línea Gratuita"],
            web: "E-mail: ",
        },
    },
    [language_keys.ADDLITTER]: {
        labels: {
            id: "Id de la camada",
            ride: "Monta",
            sell: "Ventas",
            sales: "Conejos vendidos",
            date: "Fecha",
            male: "Macho",
            dead: "Muertos",
            males: "Machos",
            alive: "Vivos",
            partum: "Parto",
            female: "Hembra",
            females: "Hembras",
            natural: "Monta Natural",
            weaning: "Destete",
            addMales: "Agregar machos",
            isFemale: "Hembra",
            palpation: "Palpación",
            prepartum: "Preparto",
            artificial: "Inseminación Artificial",
            deletemales: "Eliminar machos",
            homogenized: "Homogenizados",
            averangeWeight: "Peso promedio",
        },
        buttons: { back: "Atras", submit: "Crear camada" },
        cards: {
            transferenceDate: "Fecha de transferencia:",
            state_: "Estado:",
            gender_: ["Genero:", "Hembra", "Macho"],
            birthType_: "Concepción:",
            birthDate_: "Camada de nacimiento:",
            origin_: "Procedencia:",
            stages_: {
                inactive: "Inactivo",
                litter: "Camada Activa",
                fattening: "En engorde",
                reproductive: "Próximo a destete",
                Pre_reproductive: "Preparandose para reproducción",
            },
        },
    },
    [language_keys.LITTER]: {
        titles: {
            id_t: "ID. Camada",
            ride_t: "MONTA",
            sales_t: "VENTAS",
            partum_t: "PARTO",
            stages_t: "ETAPAS",
            weaning_t: "DESTETE",
            palpaton_t: "PALPACIÓN",
            prepartum_t: "PREPARTO",
        },
        labels: {
            id_l: "ID",
            date: "FECHA",
            dead: "MUERTOS",
            male: "MACHO",
            males: "MACHOS",
            alive: "VIVOS",
            female: "HEMBRA",
            weight: "PESO(gr)",
            price_l: "PRECIO",
            females: "HEMBRAS",
            natural: "NATURAL",
            artificial: "ARTIFICIAL",
            homogenized: "HOMOGENIZADO",
        },
        buttons: { back_b: "Atrás", plus_b: "Reemplazo" },
    },
    [language_keys.ERRORS]: {
        "NaN": "en este momento tenemos problemas con el servidor, por favor intente mas tarde",
        "default": "Se produjo un error interno, intente nuevamente mas tarde",
        "login-empty-email": "El correo electronico no puede estar vacio",
        "register-password-mismatch": "Las contraseñas no coinciden",
        "register-empty-email": "El correo electronico no puede estar vacio",
        "tittle-permises-denied": "Permisos denegados",
        "permises-denied": "¡Acceso denegado!. Puede que: 1> No ha verificado su correo electronico, 2> No se ha iniciado sesión por error, 3> Su cuenta fue eliminada por un administrador",
        "image-invalid": "El archivo seleccionado no es valido, por favor seleccione una imagen",
        "id-invalid": "El id ingresado no es valido",
        "id-no-exists": "El id ingresado no existe",
        "id-already-exists": "El id ingresado ya existe",
        "auth/user-not-found": "El usuario o la contraseña ingresada no es correcta",
        "auth/wrong-password": "El usuario o la contraseña ingresada no es correcta",
        "auth/invalid-email": "El email ingresado no es correcta",
        "auth/email-already-exists":
            "El correo electronico ingresado ya está en uso",
        "auth/too-many-requests":
            "Existen demasiadas solicitudes desde con este correo, intente realizar la acción mas tarde",
        "auth/email-already-in-use":
            "La dirección de correo electrónico ya está en uso por otra cuenta.",
        "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
        "auth/operation-not-allowed":
            "La operación no está permitida. Debe habilitar esta opción en la consola de Firebase.",
        "auth/user-disabled": "El usuario ha sido deshabilitado.",
        "auth/invalid-credential":
            "La credencial de autenticación no es válida. El token de acceso puede haber caducado, la credencial puede haber sido revocada o la credencial de autenticación no puede ser usada con este proyecto.",
        "auth/invalid-verification-code":
            "El código de verificación no es válido o ha caducado.",
        "auth/invalid-verification-id": "El ID de verificación no es válido.",
        "auth/missing-verification-code":
            "El código de verificación no se ha proporcionado.",
        "auth/missing-verification-id":
            "El ID de verificación no se ha proporcionado.",
        "auth/credential-already-in-use":
            "Esta credencial ya está asociada con una cuenta de usuario diferente.",
        "auth/custom-token-mismatch":
            "El token personalizado no corresponde con la identidad de la cuenta de usuario.",
        "auth/missing-email": "El correo electrónico no se ha proporcionado.",
        "auth/missing-password": "La contraseña no se ha proporcionado.",
        "auth/missing-phone-number":
            "El número de teléfono no se ha proporcionado.",
        "not-found": "No se encontró el recurso solicitado",
        "not-authorized": "No autorizado",
        "invalid-credentials": "Credenciales inválidas",
        "invalid-params": "Parámetros inválidos",
    },
};

export { es };