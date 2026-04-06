"""
Configuration for ONNX face models used via face.py.
Target sizes and distance thresholds sourced from the original DeepFace library defaults.
"""

# Input (width, height) for each verification/embedding model
VERIFICATION_MODEL_TARGET_SIZES = {
    "arcface":    (112, 112),
    "deepid":     (55, 47),
    "facenet128": (160, 160),
    "facenet512": (160, 160),
    "openface":   (96, 96),
    "vggface":    (224, 224),
}

# Input (width, height) for each analysis model
ANALYSIS_MODEL_TARGET_SIZES = {
    "age":     (64, 64),
    "emotion": (48, 48),
    "gender":  (64, 64),
    "race":    (224, 224),
}

# Distance thresholds for (model, distance_metric) pairs
THRESHOLDS = {
    "arcface": {
        "cosine":    0.68,
        "euclidean": 4.15,
    },
    "deepid": {
        "cosine":    0.105,
        "euclidean": 1.05,
    },
    "facenet128": {
        "cosine":    0.40,
        "euclidean": 10.0,
    },
    "facenet512": {
        "cosine":    0.30,
        "euclidean": 23.56,
    },
    "openface": {
        "cosine":    0.10,
        "euclidean": 0.55,
    },
    "vggface": {
        "cosine":    0.40,
        "euclidean": 0.60,
    },
}


def find_verification_model_target_size(model_name: str):
    """Return (width, height) tuple for the given verification model."""
    key = model_name.lower()
    if key not in VERIFICATION_MODEL_TARGET_SIZES:
        raise ValueError(f"Unknown verification model: {model_name}")
    return VERIFICATION_MODEL_TARGET_SIZES[key]


def find_analyis_model_target_size(model_name: str):
    """Return (width, height) tuple for the given analysis model."""
    key = model_name.lower()
    if key not in ANALYSIS_MODEL_TARGET_SIZES:
        raise ValueError(f"Unknown analysis model: {model_name}")
    return ANALYSIS_MODEL_TARGET_SIZES[key]


def find_threshold(model_name: str, distance_metric: str):
    """Return the distance threshold for (model, metric) pair."""
    key = model_name.lower()
    if key not in THRESHOLDS:
        raise ValueError(f"Unknown model: {model_name}")
    if distance_metric not in THRESHOLDS[key]:
        raise ValueError(f"Unknown distance metric: {distance_metric}")
    return THRESHOLDS[key][distance_metric]
