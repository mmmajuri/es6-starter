import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import FirstPage from 'components/pages/FirstPage';


describe('FirstPage', () => {
  let page;
  let button;

  beforeEach(() => {
    page = TestUtils.renderIntoDocument(<FirstPage />);
    button = TestUtils.findRenderedDOMComponentWithClass(
      page, 'toggle-button');
  });

  describe('clicking "toggle hello"', () => {
    it('should toggle (hide/show) hello world message on click', () => {
      expect(page.refs.helloWorld).toBeDefined();
      TestUtils.Simulate.click(button.getDOMNode());
      expect(page.refs.helloWorld).not.toBeDefined();
      TestUtils.Simulate.click(button.getDOMNode());
      expect(page.refs.helloWorld).toBeDefined();
    });
  });
});
