import { Inputs } from '../../../../../0-GeneralComp/1-Inputs/Inputs';
import { basicData } from '../../../../../0-GeneralComp/0-StaticData/dataProv';

export function DropdownForm({ motivo, handleChange }) {
    return (
        <>
            {motivo === 'Traslado' && (
                <>
                    <Inputs
                        value={basicData?.info?.traslado}
                        leyend='Fecha de traslado'
                        name='traslado'
                        type='date'
                        handleChange={handleChange}
                    />
                    <Inputs
                        value={basicData?.info?.origen}
                        leyend='Origen'
                        name='origen'
                        placeholder='Ingrese el origen'
                        type='text'
                        handleChange={handleChange}
                    />
                    <Inputs
                        value={basicData?.info?.idPadre}
                        leyend='Identificador del padre'
                        name='idPadre'
                        placeholder='Ingrese el identificador'
                        type='number'
                        inputmode='numeric'
                        handleChange={handleChange}
                    />
                    <Inputs
                        value={basicData?.info?.idMadre}
                        leyend='Identificador de la madre'
                        name='idMadre'
                        placeholder='Ingrese el identificador'
                        type='number'
                        inputmode='numeric'
                        handleChange={handleChange}
                    />
                </>
            )}
            {motivo === 'Nacimiento' && (
                <>
                    <Inputs
                        value={basicData?.info?.idPadre}
                        leyend='Identificador del padre'
                        name='idPadre'
                        placeholder='Ingrese el identificador'
                        type='number'
                        inputmode='numeric'
                        handleChange={handleChange}
                    />
                    <Inputs
                        value={basicData?.info?.idMadre}
                        leyend='Identificador de la madre'
                        name='idMadre'
                        placeholder='Ingrese el identificador'
                        type='number'
                        inputmode='numeric'
                        handleChange={handleChange}
                    />
                </>
            )}
            {motivo === 'Compra' && (
                <>
                    <Inputs
                        value={basicData?.info?.proveedor}
                        leyend='Proveedor'
                        name='proveedor'
                        placeholder='Ingrese el proveedor'
                        type='text'
                        handleChange={handleChange}
                    />
                    <Inputs
                        value={basicData?.info?.precio}
                        leyend='Precio'
                        name='precio'
                        placeholder='Ingrese el precio'
                        type='number'
                        inputmode='numeric'
                        handleChange={handleChange}
                    />
                    <Inputs
                        value={basicData?.info?.origen}
                        leyend='Origen'
                        name='origen'
                        placeholder='Ingrese el origen'
                        type='text'
                        handleChange={handleChange}
                    />
                    <Inputs
                        value={basicData?.info?.idPadre}
                        leyend='Identificador del padre'
                        name='idPadre'
                        placeholder='Ingrese el identificador'
                        type='number'
                        inputmode='numeric'
                        handleChange={handleChange}
                    />
                    <Inputs
                        value={basicData?.info?.idMadre}
                        leyend='Identificador de la madre'
                        name='idMadre'
                        placeholder='Ingrese el identificador'
                        type='number'
                        inputmode='numeric'
                        handleChange={handleChange}
                    />
                </>
            )}
        </>
    );
}
