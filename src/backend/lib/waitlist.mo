import Types "../types/common";
import Map "mo:core/Map";

module {
  public type State = Map.Map<Text, Types.WaitlistEntry>;

  public func isValidEmail(email : Text) : Bool {
    // Basic check: must contain '@' and at least one '.' after '@'
    let atIdx = email.split(#char '@');
    let parts = atIdx.toArray();
    if (parts.size() != 2) return false;
    let local = parts[0];
    let domain = parts[1];
    if (local.size() == 0) return false;
    if (domain.size() < 3) return false;
    // domain must contain a dot
    domain.contains(#char '.')
  };

  public func parseUserType(userType : Text) : ?Types.UserType {
    switch (userType) {
      case ("student") ? #student;
      case ("publisher") ? #publisher;
      case (_) null;
    };
  };

  public func submit(
    state : State,
    email : Text,
    userType : Types.UserType,
    timestamp : Types.Timestamp,
  ) : { #ok : Text; #err : Text } {
    if (not isValidEmail(email)) {
      return #err("Invalid email address.");
    };
    if (state.containsKey(email)) {
      return #err("This email is already on the waitlist.");
    };
    let entry : Types.WaitlistEntry = { email; userType; timestamp };
    state.add(email, entry);
    #ok("You have been added to the waitlist!");
  };

  public func count(state : State) : Nat {
    state.size()
  };
};
