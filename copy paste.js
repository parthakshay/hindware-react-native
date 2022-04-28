const SigninPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { colors } = useTheme();

    const signIn = () => {                          // <= Added this function
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

        if (!strongRegex.test(email)) {
            showMessage(MESSAGE.email)
            return false;
        } else if (password.length < 8) {
            showMessage(MESSAGE.password);
            return false;
        }
    }

    return (
        <View>
            <Animatable.View >
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="E-mail"
                        placeholderTextColor="white"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => signIn()}>
                    <LinearGradient colors={['#730018', '#00085b']} style={styles.signIn}>
                        <Text style={styles.textSign}>SIGN IN</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text>Fogot Your Password?</Text>
            </Animatable.View >
        </View>
    )
}