// @flow
import React, { PureComponent, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { Formik } from "formik";
import { ContentContainer } from "./../../components/ContentContainer";
import { Modal } from "./../../components/Modal";
import { Form } from "./../../components/Form";
import { Input } from "./../../components/Input";
import { List } from "./../../components/List";
import { StyledHome } from "./Home.styled";

const MOCK_ITEMS = [
  { name: "Fulano", age: "21", email: "fulano@hbsis.com.br" },
  { name: "Ciclano", age: "22", email: "ciclano@hbsis.com.br" },
  { name: "Beltrano", age: "23", email: "beltrano@hbsis.com.br" }
];

function generateRandomItems() {
  let array = [];
  for (let i = 1; i <= 1000; i++) {
    array.push({
      ...MOCK_ITEMS[Math.floor(MOCK_ITEMS.length * Math.random())],
      id: i
    });
  }

  return array;
}

type State = {
  modalOpened: boolean,
  personList: Array<any>
};

type Props = {};

type FormValues = { name: string, age: string, email: string };

class Home extends PureComponent<Props, State> {
  state: State = {
    modalOpened: false,
    personList: generateRandomItems() || []
  };

  formValues: FormValues = {
    name: "",
    age: "",
    email: ""
  };

  handleToggleModal = (): void => {
    this.setState(state => ({
      modalOpened: !state.modalOpened
    }));
  };

  handleSubmitForm = (values: FormValues, { resetForm }: any) => {
    this.setState(
      state => ({
        personList: [
          ...state.personList,
          {
            ...values,
            id: state.personList[state.personList.length - 1].id + 1
          }
        ]
      }),
      () => {
        resetForm();
        this.handleToggleModal();
      }
    );
  };

  handleRemoveItem = indexItem => {
    this.setState(state => ({
      personList: [
        ...state.personList.slice(0, indexItem),
        ...state.personList.slice(indexItem + 1)
      ]
    }));
  };

  render() {
    const { personList } = this.state;
    return (
      <Fragment>
        <StyledHome>
          <ContentContainer className="home-content">
            <FormattedMessage id="home.mainText">
              {txt => <h3 className="lang-text">{txt}</h3>}
            </FormattedMessage>

            <button className="btn-add-item" onClick={this.handleToggleModal}>
              <FormattedMessage id="home.addPerson" />
            </button>

            <List items={personList} onRemoveItem={this.handleRemoveItem} />
          </ContentContainer>
        </StyledHome>

        <Formik
          initialValues={this.formValues}
          onSubmit={this.handleSubmitForm}
        >
          {props => (
            <FormattedMessage id="home.modal.title">
              {value => (
                <Modal
                  isOpen={this.state.modalOpened}
                  onSave={props.handleSubmit}
                  onClose={this.handleToggleModal}
                  title={value}
                >
                  <Form>
                    <FormattedMessage id="home.modal.form.name">
                      {value => (
                        <Input
                          type="text"
                          name="name"
                          value={props.values.name}
                          onChange={props.handleChange}
                          placeholder={value}
                        />
                      )}
                    </FormattedMessage>

                    <FormattedMessage id="home.modal.form.age">
                      {value => (
                        <Input
                          type="number"
                          name="age"
                          value={props.values.age}
                          onChange={props.handleChange}
                          placeholder={value}
                        />
                      )}
                    </FormattedMessage>

                    <FormattedMessage id="home.modal.form.email">
                      {value => (
                        <Input
                          type="email"
                          name="email"
                          value={props.values.email}
                          onChange={props.handleChange}
                          placeholder={value}
                        />
                      )}
                    </FormattedMessage>
                  </Form>
                </Modal>
              )}
            </FormattedMessage>
          )}
        </Formik>
      </Fragment>
    );
  }
}

export { Home };
