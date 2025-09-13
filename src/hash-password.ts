import * as bcrypt from 'bcrypt';

async function hashPassword() {
  const plainPassword = 'P@ssw0rd';
  const saltRounds = 10;
  try {
    const hashed = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Hashed password:', hashed);
  } catch (err) {
    console.error('Error hashing password:', err);
  }
}

hashPassword();
