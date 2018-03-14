import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import localeActions from "./../../actions/localeActions";
import { StyledLanguageSelector } from "./LanguageSelector.styled";

const LanguageSelector = connect(mapStateToProps, mapDispatchToProps)(
  ({ languages, locale, actions }) => (
    <StyledLanguageSelector>
      {languages
        .filter(lang => lang !== locale)
        .map(lang => (
          <button key={lang} onClick={() => actions.changeLocale(lang)}>{lang}</button>
        ))}
    </StyledLanguageSelector>
  )
);

function mapStateToProps({ languages, locale }) {
  return {
    languages,
    locale
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

LanguageSelector.propTypes = {
  languages: PropTypes.array,
  locale: PropTypes.string,
  actions: PropTypes.object,
}

export { LanguageSelector };
