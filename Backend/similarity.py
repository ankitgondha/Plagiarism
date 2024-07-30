import numpy as np


def jaccard_similarity(set1, set2):
    """Compute the Jaccard similarity between two sets"""
    intersection = len(set1 & set2)
    union = len(set1 | set2)
    return intersection / union if union != 0 else 0




