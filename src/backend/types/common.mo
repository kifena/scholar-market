module {
  public type Timestamp = Int;

  public type UserType = {
    #student;
    #publisher;
  };

  public type WaitlistEntry = {
    email : Text;
    userType : UserType;
    timestamp : Timestamp;
  };
};
