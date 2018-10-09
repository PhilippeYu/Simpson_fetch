import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectEmployee}>Another Quote</button>
        </div>
    );
};

export  default  GenerateEmployee;