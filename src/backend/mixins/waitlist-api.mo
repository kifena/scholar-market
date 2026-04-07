import WaitlistLib "../lib/waitlist";
import Time "mo:core/Time";

mixin (waitlistState : WaitlistLib.State) {
  public func submitWaitlist(email : Text, userType : Text) : async { #ok : Text; #err : Text } {
    let parsedUserType = WaitlistLib.parseUserType(userType);
    switch (parsedUserType) {
      case null { #err("Invalid user type. Must be 'student' or 'publisher'.") };
      case (?ut) {
        WaitlistLib.submit(waitlistState, email, ut, Time.now())
      };
    };
  };

  public query func getWaitlistCount() : async Nat {
    WaitlistLib.count(waitlistState)
  };
};
