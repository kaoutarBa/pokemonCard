import { StyleSheet, Text, Platform, View, Image } from "react-native";

export default function PokemonCard({
  name,
  type,
  hp,
  image,
  moves,
  weaknesses,
}: any) {
  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={[styles.card, { borderColor }]}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>
          ❤️
          {hp}
        </Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>
      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknessesText}>
          Weaknesses: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  container: {
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessesContainer: { marginBottom: 16 },

  weaknessesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "fire":
      return { borderColor: "#F08030", emoji: "🔥" };
    case "water":
      return { borderColor: "#6890F0", emoji: "💧" };
    case "grass":
      return { borderColor: "#78C850", emoji: "🍃" };
    case "electric":
      return { borderColor: "#F8D030", emoji: "⚡" };
    default:
      return { borderColor: "#A8A878", emoji: "❓" };
  }
};
