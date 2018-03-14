import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import localeActions from "./../../actions/localeActions";
import { flattenMessages } from "./../../utils/intlMessageFormatter";

import messages from "./../../locales";

import pt from "react-intl/locale-data/pt";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

addLocaleData([...pt, ...en, ...es]);

class IntlContainer extends PureComponent {
  componentWillMount() {
    const locale =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;

    this.props.actions.changeLocale(locale);
  }

  render() {
    const { children, locale } = this.props;
    return (
      <IntlProvider
        locale={locale}
        messages={flattenMessages(messages[locale])}
      >
        {children}
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.locale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...localeActions
      },
      dispatch
    )
  };
}

IntlContainer.propTypes = {
  locale: PropTypes.string,
  actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(IntlContainer);
