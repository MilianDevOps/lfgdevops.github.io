import TypeAnimation from "react-type-animation";
import { WidthContainer } from "./WidthContainer";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export default function BootupScreen({
  isLoadingCyberdeck,
  isLoadingUserTokens,
  isLoadingInitialData,
  account,
}) {
  return (
    <div>
      {isBrowser ? (
        <>
          <WidthContainer>
            <div style={{ textAlign: "left" }}>
              <pre>
                <output>
                  <TypeAnimation
                    cursor={!isLoadingCyberdeck}
                    sequence={["Booting LFG CyberDeck..."]}
                    wrapper="h2"
                  />
                  <TypeAnimation
                    cursor={false}
                    sequence={[500, account]}
                    wrapper="p"
                  />
                  {isLoadingCyberdeck && (
                    <TypeAnimation
                      cursor={false}
                      sequence={[1000, "Initializing Firmware..."]}
                      wrapper="p"
                    />
                  )}
                  {isLoadingUserTokens && (
                    <TypeAnimation
                      cursor={false}
                      sequence={[1500, "Fetching User Inventory..."]}
                      wrapper="p"
                    />
                  )}
                  {!isLoadingInitialData && (
                    <TypeAnimation
                      cursor={!isLoadingInitialData}
                      sequence={[2000, "Press 'C' to clear console"]}
                      wrapper="p"
                    />
                  )}
                </output>
              </pre>
            </div>
          </WidthContainer>
        </>
      ) : (
        <>
          <WidthContainer>
            <div style={{ textAlign: "left" }}>
              <pre>
                <output>
                  <TypeAnimation
                    cursor={!isLoadingCyberdeck}
                    sequence={["Booting LFG CyberDeck..."]}
                    wrapper="h2"
                  />
                  <TypeAnimation
                    cursor={false}
                    sequence={[500, account]}
                    wrapper="p"
                  />
                  {isLoadingCyberdeck && (
                    <TypeAnimation
                      cursor={false}
                      sequence={[1000, "Initializing Firmware..."]}
                      wrapper="p"
                    />
                  )}
                  {isLoadingUserTokens && (
                    <TypeAnimation
                      cursor={false}
                      sequence={[1500, "Fetching User Inventory..."]}
                      wrapper="p"
                    />
                  )}
                  {!isLoadingInitialData && (
                    <TypeAnimation
                      cursor={!isLoadingInitialData}
                      sequence={[2000, "Tap to clear console"]}
                      wrapper="p"
                    />
                  )}
                </output>
              </pre>
            </div>
          </WidthContainer>
        </>
      )}
    </div>
  );
}
