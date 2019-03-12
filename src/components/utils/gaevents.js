
//window.ga("send", "event", {
//           eventCategory: "Outbound Link",
//           eventAction: "click",
//           eventLabel: props.href,
//           transport: redirect ? "beacon" : "",
//           hitCallback: function hitCallback() {
//             if (redirect) {
//               document.location = props.href;
//             }
//           }
//         });

// List of Categories:
const CAT_USER_ACTION = 'userAction'

// List of Actions
const ACT_SCROLL = 'scroll'

const ga = window.ga
const DEFAULT_CATEGORY = 'default'
const DEFAULT_ACTION = 'default'
const DEFAULT_LABEL = 'default'
const DEFAULT_VALUE = 0
const isGAEnabled = () => window.ga != null

const sendEvent = (eventCategory = DEFAULT_CATEGORY,
                   eventAction = DEFAULT_ACTION,
                   eventLabel = DEFAULT_LABEL,
                   eventValue = DEFAULT_VALUE) => {
  if (!isGAEnabled()) {
    console.debug('Google Analytics not enabled, skipping.')
    return
  }
  const hitType = 'event'
  ga('send', {
    hitType,
    eventCategory,
    eventAction,
    eventLabel,
    eventValue
  })
}

export const sendUserScrolledPageEvent = (label) => {
  sendEvent(CAT_USER_ACTION, ACT_SCROLL, label)
}
