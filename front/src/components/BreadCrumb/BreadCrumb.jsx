
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const BreadCrumb = (props) => {
    return (
        <>
          <Breadcrumb className='mt-4 mb-2'>
            <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
            <Breadcrumb.Item active>{props.page}</Breadcrumb.Item>
        </Breadcrumb>
        </>
  
    );
}

export default BreadCrumb;