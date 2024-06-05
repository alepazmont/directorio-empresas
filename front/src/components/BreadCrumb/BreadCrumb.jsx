
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const BreadCrumb = (props) => {
    return (
        <>
          <Breadcrumb className='mt-5 mb-5'>
            <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
            <Breadcrumb.Item active>{props.page}</Breadcrumb.Item>
        </Breadcrumb>
        </>
  
    );
}

export default BreadCrumb;