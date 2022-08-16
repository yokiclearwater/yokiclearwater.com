


declare namespace User {
  interface UserData {
    description: string;
    hobbies: Hobbies[];
  }

  interface Hobbies {
    name: string;
    icon: keyof typeof import('react-icons/si');
  }
}
