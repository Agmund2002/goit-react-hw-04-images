import { Formik } from 'formik';
 import * as Yup from 'yup';
import { Error, FormStyled, Header, Icon, Input, SubmitBtn } from './Searchbar.styled';

 const schema = Yup.object().shape({
   keyword: Yup.string()
     .max(50, 'Too Long!')
     .required('Required')
 });

export const Searchbar = ({handlerSubmit}) => {
  return (
    <Header>
      <Formik
        initialValues={{
          keyword: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          handlerSubmit(values.keyword);
          actions.resetForm();
        }}
      >
        <FormStyled>
          <SubmitBtn type="submit">
            <Icon />
          </SubmitBtn>

          <Input
            type="text"
            name="keyword"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Error component="span" name="keyword" />
        </FormStyled>
      </Formik>
    </Header>
  );
};
