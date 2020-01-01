from django import test

from bingosync.models import game_type

class GametypeTestCase(test.SimpleTestCase):

    def test_game_type_consistency(self):
        entered = set()
        for group, entry in game_type.GAME_GROUPS.items():
            variants = entry["variants"]
            games = [variant[0] for variant in variants]

            self.assertEqual(games[0], group)
            for game in games:
                self.assertNotIn(game, entered)
                entered.add(game)

        for game in game_type.GameType:
            self.assertIn(game, entered)

    def test_all_variants(self):
        game_types_set = set(game_type.GameType)
        all_variants_set = set(game_type.ALL_VARIANTS)
        self.assertEqual(game_types_set, all_variants_set)

