
# import json
# import re
# from collections import defaultdict
# from itertools import product
# import nltk
# from nltk.tokenize import word_tokenize
# from nltk.corpus import PlaintextCorpusReader
# from nltk.metrics import jaccard_distance
# from nltk.tokenize import word_tokenize

# # Download NLTK resources (if not already downloaded)
# nltk.download('punkt')

# from similarity import  jaccard_similarity




# def calculate_jaccard_similarity(text1, text2):
#     tokens1 = set(word_tokenize(text1.lower()))
#     tokens2 = set(word_tokenize(text2.lower()))
#     return 1 - jaccard_distance(tokens1, tokens2)


# def _cross_check_sentences(
#     input_sents, tempfile, ref_doc_sents, results, similarity_threshold, quiet
# ):
#     CTN=0
#     for input_sent, (ref_doc, ref_sents) in product(input_sents, ref_doc_sents.items()):
#         input_tokens = set(re.findall(r"\b\w+\b", input_sent.lower()))
#         for ref_sent in ref_sents:

#             ref_tokens = set(re.findall(r"\b\w+\b", ref_sent.lower()))

#             similarity_score = jaccard_similarity(input_tokens, ref_tokens)
#             print((input_tokens))
#             if similarity_score > similarity_threshold:
#                 similarity = {
#                     "input_sentence": input_sent,
#                     "reference_sentence": ref_sent,
#                     "reference_document": ref_doc,
#                     "similarity_score": similarity_score/4,
#                     "examinfile": tempfile
#                 }
#                 results.append(similarity)
#                 if not quiet:
#                     _display_similar_sentence(similarity)


# def _display_similar_sentence(similarity_dict):
#     print("Input Sentence:    ", similarity_dict["input_sentence"])
#     print("Reference Sentence:", similarity_dict["reference_sentence"])
#     print("Reference Document:", similarity_dict["reference_document"])
#     print("Similarity Score: {:.4f}".format(
#         similarity_dict["similarity_score"]))
#     print()


# def _get_all_files_content(examined_file, reference_files):

#     with open(examined_file, "r", encoding="utf-8") as f:
#         input_text_content = f.read().replace("\n", " ").strip()

#     reference_docs = {}
#     for ref_doc in reference_files:
#         with open(ref_doc, "r", encoding="utf-8") as f:
#             reference_docs[ref_doc] = f.read().replace("\n", " ").strip()
#     return input_text_content, reference_docs


# def check(input_file, reference_file, similarity_threshold, output_file=None, quiet=False):
#     # placeholder for the list of dictionaries
#     with open(input_file, 'r', encoding='utf-8') as file:
#         input_text = file.read()

#     with open(reference_file, 'r', encoding='utf-8') as file:
#         reference_text = file.read()

#     similarity_score = calculate_jaccard_similarity(input_text, reference_text)

#     result_details = {
#         "input_sentence": input_text,
#         "reference_sentence": reference_text,
#         "similarity_score": similarity_score,
#         "examinfile": input_file,
#         "reference_document": reference_file
#     }

#     return result_details




import nltk
from nltk.corpus import PlaintextCorpusReader
from nltk.metrics import jaccard_distance
from nltk.tokenize import word_tokenize

# Download NLTK resources (if not already downloaded)
nltk.download('punkt')

def calculate_jaccard_similarity(text1, text2):
    tokens1 = set(word_tokenize(text1.lower()))
    tokens2 = set(word_tokenize(text2.lower()))
    return jaccard_distance(tokens1, tokens2)

def check_similarity(input_file, reference_file):
    with open(input_file, 'r', encoding='utf-8') as file:
        input_text = file.read()

    with open(reference_file, 'r', encoding='utf-8') as file:
        reference_text = file.read()

    similarity_score = calculate_jaccard_similarity(input_text, reference_text)

    result_details = {
        "input_sentence": input_text,
        "reference_sentence": reference_text,
        "similarity_score": similarity_score,
        "examinfile": input_file,
        "reference_document": reference_file
    }

    return result_details

# # Replace with the actual paths to your text files
# input_file_path = 'txt1.txt'
# reference_file_path = 'txt1.txt'

# result = check_similarity(input_file_path, reference_file_path)

# # Print the result details
# for key, value in result.items():
#     print(f"{key}: {value}")
